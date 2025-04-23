import React from 'react';
import {
    Box,
    Typography,
    Container,
    Button,
    Stepper,
    Step,
    StepLabel,
    StepConnector,
    useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

const CustomConnector = styled(StepConnector)(({ theme }) => ({
    '& .MuiStepConnector-line': {
        borderColor: '#c7c7c7',
        borderTopWidth: 1,
        borderTopStyle: 'dashed',
    },
    '&.Mui-active': {
        '& .MuiStepConnector-line': {
            borderColor: '#2e7d32',
        },
    },
    '&.Mui-completed': {
        '& .MuiStepConnector-line': {
            borderColor: '#2e7d32',
        },
    },
}));

const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: '#c7c7c7',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#2e7d32',
    }),
    ...(ownerState.completed && {
        color: '#2e7d32',
    }),
    '& .StepIcon-circle': {
        width: 46,
        height: 46,
        borderRadius: '50%',
        backgroundColor: 'white',
        border: '2px solid currentColor',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '& .StepIcon-completedCircle': {
        width: 46,
        height: 46,
        borderRadius: '50%',
        border: '2px solid #2e7d32',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function CustomStepIcon(props) {
    const { active, completed, className } = props;
    return (
        <CustomStepIconRoot ownerState={{ active, completed }} className={className}>
            {completed ? (
                <div className="StepIcon-completedCircle">
                    <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#2e7d32' }} />
                </div>
            ) : (
                <div className="StepIcon-circle">
                    {active ? <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#2e7d32' }} /> : null}
                </div>
            )}
        </CustomStepIconRoot>
    );
}

function OrderConfirmation() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const steps = [
        { label: 'Order on 17 Feb', completed: true, active: false },
        { label: 'Ready to ship', completed: false, active: false },
        { label: 'Expected Date 21 Feb', completed: false, active: false }
    ];

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    py: 3
                }}
            >
                <Box
                    sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 2,
                        border: '2px dashed #5ca95c',
                        position: 'relative',
                        padding: 2
                    }}
                >
                    <Box
                        sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            backgroundColor: '#2e7d32',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute'
                        }}
                    >
                        <CheckIcon sx={{ color: 'white', fontSize: 36 }} />
                    </Box>
                </Box>
                
                <Typography variant="h5" component="h1" fontWeight="bold" gutterBottom>
                    Thank you! Your order has been confirmed.
                </Typography>
                <Typography variant="body1" mb={6}>
                    We will email you as soon as its shipped
                </Typography>
                
                <Box sx={{ width: '100%', mb: 5 }}>
                    <Stepper
                        activeStep={1}
                        alternativeLabel={!isMobile}
                        orientation={isMobile ? 'vertical' : 'horizontal'}
                        connector={<CustomConnector />}
                    >
                        {steps.map((step, index) => (
                            <Step
                                key={index}
                                completed={step.completed}
                                active={step.active}
                            >
                                <StepLabel
                                    icon={<CustomStepIcon active={step.active} completed={step.completed} />}
                                    sx={{
                                        '& .MuiStepLabel-label': {
                                            mt: 1,
                                            fontSize: isMobile ? '0.9rem' : '1rem',
                                            fontWeight: step.active ? 'bold' : 'normal'
                                        }
                                    }}
                                >
                                    {step.label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                
                <Typography variant="body1" textAlign="center" sx={{ mb: 4, maxWidth: isMobile ? '90%' : '70%' }}>
                    The estimated delivery time for your order has been provided to give you
                    an idea of when to expect your package
                </Typography>
                
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: 'black',
                        color: 'white',
                        borderRadius: '4px',
                        textTransform: 'none',
                        py: 1.5,
                        px: 3,
                        '&:hover': {
                            bgcolor: '#333'
                        }
                    }}
                >
                    Cancel order
                </Button>
            </Box>
        </Container>
    );
}

export default OrderConfirmation;