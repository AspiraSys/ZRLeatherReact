import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHighlight, setAvailability, setStyle, setCategories, setPriceRange } from "../../Stores/Reducers/filterSlice";
import { FormControl, FormControlLabel, RadioGroup, Radio, Checkbox, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  return (
    <div style={{ width: "250px", padding: "20px", background: "#fff" }}>
      <Typography variant="h6">Filter by</Typography>

      {/* Highlights */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Highlights</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup
              value={filters.highlights}
              onChange={(e) => dispatch(setHighlight(e.target.value))}
            >
              {["All", "Best Sellers", "New Arrival", "Popular", "Others"].map((item) => (
                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Availability */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Availability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <RadioGroup
              value={filters.availability}
              onChange={(e) => dispatch(setAvailability(e.target.value))}
            >
              {["All", "In Stock", "Out Stock"].map((item) => (
                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* Style */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Filter by Style</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {["All", "Luxury", "Men’s Formal", "Men’s Casual"].map((item) => (
            <FormControlLabel
              key={item}
              control={<Checkbox checked={filters.style.includes(item)} onChange={() => dispatch(setStyle(item))} />}
              label={item}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Categories */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Shop by categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {["Footwear", "Bags", "Wallets", "Belts"].map((item) => (
            <FormControlLabel
              key={item}
              control={<Checkbox checked={filters.categories.includes(item)} onChange={() => dispatch(setCategories(item))} />}
              label={item}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Price */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup
            value={filters.priceRange}
            onChange={(e) => dispatch(setPriceRange(e.target.value))}
          >
            {["All", "High to Low", "Low to High"].map((item) => (
              <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterSidebar;
