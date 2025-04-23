import React, { useState } from "react";
import { Typography, Box, TextField, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ text, borderColor, hoverStyles, to, onClick, disabled }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (to) navigate(to);
    if (onClick) onClick();
  };
  
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        backgroundColor: "transparent",
        border: `1px solid ${borderColor || "#000"}`,
        borderRadius: "4px",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.3s ease",
        opacity: disabled ? 0.7 : 1,
      }}
      onMouseOver={(e) => {
        if (hoverStyles && !disabled) {
          Object.entries(hoverStyles).forEach(([key, value]) => {
            e.currentTarget.style[key] = value;
          });
        }
      }}
      onMouseOut={(e) => {
        if (hoverStyles && !disabled) {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "inherit";
        }
      }}
    >
      {text}
    </button>
  );
};

export default function DynamicForm({ fields, buttonText, heading, navigate, onSubmit }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const textFieldStyles = {
    bgcolor: "#F5F5F5",
    borderRadius: 2,
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "transparent" },
      "&:hover fieldset": { borderColor: "transparent" },
      "&.Mui-focused fieldset": { borderColor: "transparent" },
    },
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  const validateForm = () => {
    const validationErrors = {};
    fields.forEach((field) => {
      if (field.label === "CityPinCodeGroup") return;
      
      if (field.required && !formData[field.name]) {
        validationErrors[field.name] = 'This field is required';
      }
    });
    
    if (fields.some(f => f.label === "CityPinCodeGroup")) {
      if (!formData.city) {
        validationErrors.city = 'City is required';
      }
      if (!formData.pinCode) {
        validationErrors.pinCode = 'Pin code is required';
      }
    }
    
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    if (onSubmit) {
      onSubmit(formData);
    }
    

    if (navigate) {
      const navigateTo = typeof navigate === 'string' ? navigate : "/ShippingDetails2";
      window.location.href = navigateTo; 
    }
    
    setIsSubmitting(false);
  };
  
  return (
    <Paper
      sx={{
        px: { lg: 4, md: 4, sm: 2, xs: 2 },
        py: { lg: 4, md: 2, sm: 2, xs: 2 },
        borderRadius: 4,
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        bgcolor: "#FDFCFB",
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        {heading && (
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: { lg: 33, md: 33, xs: 20, sm: 22 },
            }}
          >
            {heading}
          </Typography>
        )}
        
        {fields.map((field, index) => {
          if (field.label === "CityPinCodeGroup") {
            return (
              <Box key={index} sx={{ mb: 2, display: "flex", gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography fontWeight={500} textAlign='left' mb={0.8}>City*</Typography>
                  <TextField
                    fullWidth
                    autoComplete="off"
                    required
                    name="city"
                    placeholder="Enter your City"
                    value={formData.city || ''}
                    onChange={handleChange}
                    error={!!errors.city}
                    helperText={errors.city}
                    sx={textFieldStyles}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography fontWeight={500} textAlign='left' mb={0.8}>Pin code*</Typography>
                  <TextField
                    fullWidth
                    autoComplete="off"
                    required
                    name="pinCode"
                    placeholder="000-000"
                    value={formData.pinCode || ''}
                    onChange={handleChange}
                    error={!!errors.pinCode}
                    helperText={errors.pinCode}
                    sx={textFieldStyles}
                  />
                </Box>
              </Box>
            );
          }
          
          return (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography fontWeight={500} textAlign='left' mb={0.8}>
                {field.label}{field.required ? '*' : ''}:
              </Typography>
              <TextField
                fullWidth
                autoComplete="off"
                type={field.type || "text"}
                required={field.required || false}
                placeholder={field.placeholder}
                multiline={field.multiline || false}
                rows={field.rows || undefined}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                error={!!errors[field.name]}
                helperText={errors[field.name]}
                sx={textFieldStyles}
              />
            </Box>
          );
        })}
        
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            width: "100%",
            pt: { lg: 2, md: 0, sm: 0, xs: 0 },
          }}
        >
          <CustomButton
            text={buttonText}
            borderColor="#00000070"
            hoverStyles={{ backgroundColor: "#987760", color: "white" }}
            onClick={handleSubmit}
            disabled={isSubmitting}
          />
        </Box>
      </Box>
    </Paper>
  );
}