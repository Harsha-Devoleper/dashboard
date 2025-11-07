import React, {useState} from 'react'
import API_URL from '../../helpers/ApiPath';

const AddFirm = () => {
  const [firmName, setFirmName] = useState('');
  const [area, setArea] = useState('');
  const [category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [offer, setOffer] = useState('');
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  const handleRegionChange = (event) => {
    const value = event.target.value;
    if (region.includes(value)) {
      setRegion(region.filter((item) => item !== value));
    } else {
      setRegion([...region, value]);
    }
  };

  const handleImage = (event) => {
    const selectedImage = event.target.files[0]
    setFile(selectedImage)
    
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission
    try {
      const loginToken = localStorage.getItem('vendorToken');
      if (!loginToken) {
        console.error('No login token found');
      }

      const formData = new FormData();
      formData.append('firmName', firmName);
      formData.append('area', area);
      formData.append('offer', offer);
      formData.append('firmImage', file);

      category.forEach((value) => {
        formData.append('category', value);
      });

      region.forEach((value) => {
        formData.append('region', value);
      });
      
      const response = await fetch(`${API_URL}firm/add-firm`, {
        method: 'POST',
        headers: {
          'token': `${loginToken}`
        },
        body: formData
      });

      const result = await response.json();
      if (response.ok) {
          console.log('Firm added successfully:', result);
          setFirmName('');
          setArea('');
          setCategory([]);
          setRegion([]);
          setOffer('');
          setFile(null);
          alert('Firm added successfully');
      } else if (result.message === "Vendor can add only one firm") {
          alert('Vendor can add only one firm');
      } else {
        alert('Failed to add firm');
      }
      const firmmId = result.firmmId;
      console.log('Firm ID:', firmmId);

      localStorage.setItem('firmmId', firmmId);
    } catch (error) {
      console.log('Error adding firm:', error);
      alert('Error adding firm');
    }
  };

  return (
    <div className="firmSection">
        <form className="tableForm" onSubmit={handleSubmit}>
            <label>Firm Name:</label><br />
            <input type="text" name="firmName" value={firmName} onChange={(e) => setFirmName(e.target.value)} /><br/>
            <label>Area:</label><br />
            <input type="text" name="area" value={area} onChange={(e) => setArea(e.target.value)} /><br/>
            <label>Category:</label><br />
            <label>Veg</label>
            <input type="checkbox" name="veg" checked={category.includes('veg')} value="veg" onChange={handleChange} /><br/>
            <label>Non-Veg</label>
            <input type="checkbox" name="nonVeg" checked={category.includes('non-veg')} value="non-veg" onChange={handleChange} /><br/>
            <label>Region:</label><br />
            <label>South Indian</label>
            <input type="checkbox" name="southIndian" checked={region.includes('south-Indian')} value="south-Indian" onChange={handleRegionChange} /><br/>
            <label>North Indian</label>
            <input type="checkbox" name="northIndian" checked={region.includes('north-Indian')} value="north-Indian" onChange={handleRegionChange} /><br/>
            <label>East Indian</label>
            <input type="checkbox" name="eastIndian" checked={region.includes('east-Indian')} value="east-Indian" onChange={handleRegionChange} /><br/>
            <label>West Indian</label>
            <input type="checkbox" name="westIndian" checked={region.includes('west-Indian')} value="west-Indian" onChange={handleRegionChange} /><br/>
            <label>Bakery</label>
            <input type="checkbox" name="bakery" checked={region.includes('bakery')} value="bakery" onChange={handleRegionChange} /><br/>
            <label>Offer:</label><br />
            <input type="text" name="offer" value={offer} onChange={(e) => setOffer(e.target.value)} /><br/>
            <label>Firm Image</label>
            <input type="file" name="firmImage" onChange={handleImage} />
            <div className="btnSubmit">
                <button type="submit">Add Firm</button>
            </div>
        </form>
    </div>
  )
}

export default AddFirm