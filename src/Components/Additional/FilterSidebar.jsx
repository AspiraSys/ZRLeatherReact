import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHighlight, setAvailability, setStyle, setCategories, setPriceRange } from "../../Stores/Reducers/filterSlice";
import { 
  FormControl, 
  FormControlLabel, 
  RadioGroup, 
  Radio, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography,
  Box
} from "@mui/material";
import { FiFilter } from "react-icons/fi";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FilterSidebar = ({ category }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  
  // Track expanded state for each accordion
  const [expanded, setExpanded] = useState({
    highlights: true,
    availability: false,
    style: false,
    categories: false,
    price: false
  });
  
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded({
      ...expanded,
      [panel]: isExpanded
    });
  };

  return (
    <Box sx={{ 
      width: "100%", 
      padding: { xs: "10px", sm: "15px", md: "20px" },
      fontFamily: "Poppins",
      maxHeight: { xs: '100%', md: 'calc(100vh - 40px)' },
      overflowY: 'auto'
    }}>
      <Typography variant="h6" sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        fontWeight: "bold",
        marginBottom: "20px",
        fontSize: { xs: '1rem', sm: '1.25rem' }
      }}>
        Filter by <FiFilter />
      </Typography>

      <Accordion 
        expanded={expanded.highlights}
        onChange={handleAccordionChange('highlights')}
        sx={{ mb: 1 }}
      >
        <AccordionSummary 
          expandIcon={expanded.highlights ? <RemoveIcon /> : <AddIcon />}
        >
          <Typography>Highlights</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={filters.highlights}
              onChange={(e) => dispatch(setHighlight(e.target.value))}
            >
              {["All", "Best Sellers", "New Arrival", "Popular", "Others"].map((item) => (
                <FormControlLabel 
                  key={item} 
                  value={item} 
                  control={<Radio size="small" sx={{ color: "#A78870", '&.Mui-checked': { color: "#A78870" } }} />} 
                  label={<Typography variant="body2">{item}</Typography>}
                  sx={{ marginY: 0.5 }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={expanded.availability}
        onChange={handleAccordionChange('availability')}
        sx={{ mb: 1 }}
      >
        <AccordionSummary 
          expandIcon={expanded.availability ? <RemoveIcon /> : <AddIcon />}
        >
          <Typography>Availability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={filters.availability}
              onChange={(e) => dispatch(setAvailability(e.target.value))}
            >
              {["All", "In Stock", "Out Stock"].map((item) => (
                <FormControlLabel 
                  key={item} 
                  value={item} 
                  control={<Radio size="small" sx={{ color: "#A78870", '&.Mui-checked': { color: "#A78870" } }} />} 
                  label={<Typography variant="body2">{item}</Typography>}
                  sx={{ marginY: 0.5 }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={expanded.style}
        onChange={handleAccordionChange('style')}
        sx={{ mb: 1 }}
      >
        <AccordionSummary 
          expandIcon={expanded.style ? <RemoveIcon /> : <AddIcon />}
        >
          <Typography>Filter by Style</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={filters.style}
              onChange={(e) => dispatch(setStyle(e.target.value))}
            >
              {["All", "Luxury", "Men's Formal", "Men's Casual"].map((item) => (
                <FormControlLabel 
                  key={item} 
                  value={item} 
                  control={<Radio size="small" sx={{ color: "#A78870", '&.Mui-checked': { color: "#A78870" } }} />} 
                  label={<Typography variant="body2">{item}</Typography>}
                  sx={{ marginY: 0.5 }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={expanded.categories}
        onChange={handleAccordionChange('categories')}
        sx={{ mb: 1 }}
      >
        <AccordionSummary 
          expandIcon={expanded.categories ? <RemoveIcon /> : <AddIcon />}
        >
          <Typography>Shop by categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={filters.categories} 
              onChange={(e) => dispatch(setCategories(e.target.value))}
            >
              {["Footwear", "Bags", "Wallets", "Belts"].map((item) => (
                <FormControlLabel 
                  key={item} 
                  value={item} 
                  control={<Radio size="small" sx={{ color: "#A78870", '&.Mui-checked': { color: "#A78870" } }} />} 
                  label={<Typography variant="body2">{item}</Typography>}
                  sx={{ marginY: 0.5 }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion 
        expanded={expanded.price}
        onChange={handleAccordionChange('price')}
        sx={{ mb: 1 }}
      >
        <AccordionSummary 
          expandIcon={expanded.price ? <RemoveIcon /> : <AddIcon />}
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={filters.priceRange}
              onChange={(e) => dispatch(setPriceRange(e.target.value))}
            >
              {["All", "High to Low", "Low to High"].map((item) => (
                <FormControlLabel 
                  key={item} 
                  value={item} 
                  control={<Radio size="small" sx={{ color: "#A78870", '&.Mui-checked': { color: "#A78870" } }} />} 
                  label={<Typography variant="body2">{item}</Typography>}
                  sx={{ marginY: 0.5 }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterSidebar;