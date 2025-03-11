import React from "react";
import { Typography, Box, TextField, Paper } from "@mui/material";
import CustomButton from "./GlobalButton";

export default function DynamicForm({ fields }) {
  return (
    <Paper
      sx={{
        px: { lg: 4, md: 4, sm: 2, xs: 2 },
        py:{lg: 4, md: 2, sm: 2, xs: 2},
        borderRadius: 4,
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        bgcolor: "#FDFCFB",
      }}
    >
      <Box component="form">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: 2,
            fontSize: { lg: 33, md: 33, xs: 20, sm: 22 },
          }}
        >
          Get in Touch
        </Typography>
        {fields.map((field, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography fontWeight={500}>{field.label}:</Typography>
            <TextField
              fullWidth
              autoComplete="off"
              type={field.type || "text"}
              required={field.required || false}
              placeholder={field.placeholder}
              multiline={field.multiline || false}
              rows={field.rows || undefined}
              sx={{
                bgcolor: "#F5F5F5",
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent ",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
            />
          </Box>
        ))}
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            width: "100%",
            pt: { lg: 2, md: 0, sm: 0, xs: 0 },
          }}
        >
          <CustomButton
            text="Submit"
            borderColor="#00000070"
            hoverStyles={{ backgroundColor: "#987760", color: "white" }}
          />
        </Box>
      </Box>
    </Paper>
  );
}
