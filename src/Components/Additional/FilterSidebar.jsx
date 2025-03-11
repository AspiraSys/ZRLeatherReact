import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHighlight, setAvailability, setStyle, setCategories, setPriceRange } from "../../Stores/Reducers/filterSlice";
import { FormControl, FormControlLabel, RadioGroup, Radio, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { FiFilter } from "react-icons/fi";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  return (
    <div style={{ width: "400px", padding: "20px",  fontFamily: "Poppins" }}>
      <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', gap: '8px',fontWeight:"bold",marginBottom:"20px" ,}}>
        Filter by <FiFilter />
      </Typography>

      {/* Highlights - Always Expanded */}
      <Accordion defaultExpanded>
        <AccordionSummary >
          <Typography>Highlights</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup
              value={filters.highlights}
              onChange={(e) => dispatch(setHighlight(e.target.value))}
            >
              {["All", "Best Sellers", "New Arrival", "Popular", "Others"].map((item) => (
                <FormControlLabel 
                  key={item} 
                  value={item} 
                  control={<Radio sx={{ color: "#A78870", '&.Mui-checked': { color: "#A78870" } }} />} 
                  label={item} 
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Availability */}
      <Accordion>
        <AccordionSummary expandIcon={filters.availabilityExpanded ? <RemoveIcon /> : <AddIcon />}>
          <Typography>Availability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup
              value={filters.availability}
              onChange={(e) => dispatch(setAvailability(e.target.value))}
            >
              {["All", "In Stock", "Out Stock"].map((item) => (
                <FormControlLabel 
                  key={item} 
                  value={item} 
                  control={<Radio sx={{ color: "#A78870", '&.Mui-checked': { color: "#A78870" } }} />} 
                  label={item} 
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Filter by Style */}
      <Accordion>
        <AccordionSummary expandIcon={filters.styleExpanded ? <RemoveIcon /> : <AddIcon />}>
          <Typography>Filter by Style</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup
              value={filters.style}
              onChange={(e) => dispatch(setStyle(e.target.value))}
            >
              {["All", "Luxury", "Men's Formal", "Men's Casual"].map((item) => (
                <FormControlLabel 
                  key={item} 
                  value={item} 
                  control={<Radio sx={{ color: "#A78870", '&.Mui-checked': { color: "#A78870" } }} />} 
                  label={item} 
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Categories */}
      <Accordion>
        <AccordionSummary expandIcon={filters.categoriesExpanded ? <RemoveIcon /> : <AddIcon />}>
          <Typography>Shop by categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup
              value={filters.categories}
              onChange={(e) => dispatch(setCategories(e.target.value))}
            >
              {["Footwear", "Bags", "Wallets", "Belts"].map((item) => (
                <FormControlLabel 
                  key={item} 
                  value={item} 
                  control={<Radio sx={{ color: "#A78870", '&.Mui-checked': { color: "#A78870" } }} />} 
                  label={item} 
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Price */}
      <Accordion>
        <AccordionSummary expandIcon={filters.priceExpanded ? <RemoveIcon /> : <AddIcon />}>
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            value={filters.priceRange}
            onChange={(e) => dispatch(setPriceRange(e.target.value))}
          >
            {["All", "High to Low", "Low to High"].map((item) => (
              <FormControlLabel 
                key={item} 
                value={item} 
                control={<Radio sx={{ color: "#A78870", '&.Mui-checked': { color: "#A78870" } }} />} 
                label={item} 
              />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterSidebar;
