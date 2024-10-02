import { Container, Box, Typography, Link } from '@mui/material';

function Footer() {
    return (
        <Box component="footer" sx={{ backgroundColor: '#9290C3', color: '#ffffff', py: 0, bottom: 0, position: 'fixed', width: '100%', height: 50 }}>

            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" color="inherit" sx={{ mt: 2 }} display="flex">
                    Copyright @{new Date().getFullYear()}
                </Typography>
                <Box sx={{ justifyContent: "space-between", display: "flex", mt: 2, gap: 2 }}>
                    <Link href="#" variant="body2" color="inherit" sx={{ textDecoration: 'none' }}>Home</Link>
                    <Link href="#" variant="body2" color="inherit" sx={{ textDecoration: 'none' }}>Features</Link>
                    <Link href="#" variant="body2" color="inherit" sx={{ textDecoration: 'none' }}>Contact</Link>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;