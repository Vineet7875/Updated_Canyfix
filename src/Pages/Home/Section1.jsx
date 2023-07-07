import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfoDialogBox from './DiaglogBox';
import IssuesDialogBox from './IssuesDiaglogBox';
import data from '../../JSONDATA/data.json';
import "../Home/Section1.css";

const API_BASE_URL = 'https://apid.canyfix.com/v0';

const Section1 = () => {
  const [brands, setBrands] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedProblem, setSelectedProblem] = useState('');
  const [showButtonDialog, setShowButtonDialog] = useState(false);
  const [showModelDialog, setShowModelDialog] = useState(false);
  const [models, setModels] = useState([]);
  const [issues, setIssues] = useState([]);
  const [modelDisabled, setModelDisabled] = useState(true);
  const [problemDisabled, setProblemDisabled] = useState(true);
  const [buttonPrice, setButtonPrice] = useState(0);

  const resetSelectedFields = () => {
    setSelectedProduct('');
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedProblem('');
  };

  const handleSelectChange = async (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'product':
        setSelectedProduct(value);
        break;
      case 'brand':
        setSelectedBrand(value);
        setSelectedModel('');
        setSelectedProblem('');
        setModelDisabled(false);
        setProblemDisabled(true);
        break;
      case 'model':
        setSelectedModel(value);
        setSelectedProblem('');
        setProblemDisabled(false);

        // Fetch issues here
        try {
          const response = await axios.get(`${API_BASE_URL}/issues?model_id=${value}`);
          const { issues } = response.data.find((model) => model.model_id === Number(value));
          setIssues(issues);

          // Display model dialog box
          setShowModelDialog(true);
        } catch (error) {
          console.error('Error fetching issues:', error);
        }
        break;
      case 'problem':
        setSelectedProblem(value);
        const selectedIssue = issues.find((issue) => issue.issue_id === Number(value));
        const issuePrice = selectedIssue ? selectedIssue.issue_price : 0;
        setButtonPrice(issuePrice);
        break;
      default:
        break;
    }
  };

  const handleButtonClick = () => {
    if (selectedBrand && selectedModel) {
      setShowButtonDialog(true);
    }
  };

  const handleDialogClose = () => {
    setShowButtonDialog(false);
    setShowModelDialog(false);
  };

  const fetchBrands = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/brands`);
      setBrands(response.data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const fetchModels = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/models?brand_id=${selectedBrand}`);
      const filteredModels = response.data;
      setModels(filteredModels);
    } catch (error) {
      console.error('Error fetching models:', error);
    }
  };

  const fetchIssues = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/issues?model_id=${selectedModel}`);
      const { issues } = response.data.find((model) => model.model_id === Number(selectedModel));
      setIssues(issues);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      fetchModels();
    } else {
      setModels([]);
      setModelDisabled(true);
      setProblemDisabled(true);
    }
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      fetchIssues();
    } else {
      setIssues([]);
      setProblemDisabled(true);
    }
  }, [selectedModel]);

  return (
    <div className="container">
      <div className="left-side">
        <img src="leftimg1.png" alt="Left Image" />
      </div>
      <div className="right-side">
        <div className="head-circle">
          <div className="headers">
            <h1>Genuine Repairs</h1>
            <h2 className="orange-color">At your doorstep</h2>
          </div>
        </div>
        <div className="dropdowns">
          <select className="dropdown dropdown-product" name="product" onChange={handleSelectChange}>
            <option value="">Select Product</option>
            <option value="mobile">Mobile</option>
            {/* Render other product options */}
          </select>

          <select className="dropdown" name="brand" onChange={handleSelectChange}>
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option value={brand.id} key={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
          <select className="dropdown" name="model" onChange={handleSelectChange} disabled={modelDisabled}>
            <option value="">Select Model</option>
            {models.map((model) => (
              <option value={model.model_id} key={model.model_id}>
                {model.model}
              </option>
            ))}
          </select>

        </div>
        <button
          className={`orange-button ${selectedBrand && selectedModel ? '' : 'disabled'}`}
          onClick={handleButtonClick}
          disabled={!selectedBrand || !selectedModel}
        >
          Rs {buttonPrice.toFixed(2)}
        </button>
        <div className="features">
          {data.features.map((feature, index) => (
            <div className="star-para" key={index}>
              <img src="blue_star.jpg" alt={`Circle ${index + 1}`} />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {showButtonDialog && <InfoDialogBox onClose={handleDialogClose} />}
      {showModelDialog && <IssuesDialogBox onClose={handleDialogClose} />}
    </div>
  );
};

export default Section1;
