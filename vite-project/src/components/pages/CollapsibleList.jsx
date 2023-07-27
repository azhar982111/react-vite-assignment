import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem, { listItemClasses } from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
// import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import { ElectricBoltOutlined, FormatColorResetOutlined, FormatColorResetRounded } from '@mui/icons-material';

let listData = [
    {
        "department": "customer_service",
        "sub_departments": [
            "support",
            "customer_success"
        ]
    },
    {
        "department": "design",
        "sub_departments": [
            "graphic_design",
            "product_design",
            "web_design"
        ]
    }
]

let checked_state = {
    "customer_service": false,
    "support": false,
    "customer_success": false,
    "design": false,
    "graphic_design": false,
    "product_design": false,
    "web_design": false
}

export default function CollapsibleList() {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [agreement, setAgreement] = useState(false);
    const [status, setStatus] = useState(checked_state);

    function handleChange(e) {
        let { name, checked } = e.target;

        if (name == "customer_service") {
            setStatus((prevStatus) => ({
                ...prevStatus,
                [name]: checked,
                "support": checked,
                "customer_success": checked
            }));
        }

        if (name == "support") {
            setStatus((prevStatus) => ({
                ...prevStatus,
                [name]: checked,
                "customer_service": checked && customer_success
            }));
        }

        if (name == "customer_success") {
            setStatus((prevStatus) => ({
                ...prevStatus,
                [name]: checked,
                "customer_service": checked && support
            }));
        }

        if (name == "design") {
            setStatus((prevStatus) => ({
                ...prevStatus,
                [name]: checked,
                "graphic_design": checked,
                "product_design": checked,
                "web_design": checked
            }));
        }

        if (name == "graphic_design") {
            setStatus((prevStatus) => ({
                ...prevStatus,
                [name]: checked,
                "design": checked && product_design && web_design
            }));
        }

        if (name == "product_design") {
            setStatus((prevStatus) => ({
                ...prevStatus,
                [name]: checked,
                "design": checked && graphic_design && web_design
            }));
        }

        if (name == "web_design") {
            setStatus((prevStatus) => ({
                ...prevStatus,
                [name]: checked,
                "design": checked && graphic_design && product_design
            }));
        }
    };

    // console.log(status)

    function calculateStatus(name) {
        switch (name) {
            case 'support':
                return support;
            case 'customer_success':
                return customer_success;
            case 'graphic_design':
                return graphic_design;
            case 'product_design':
                return product_design;
            case 'web_design':
                return web_design;
            default:
                return false;
        }
    }

    const { customer_service, support, customer_success, design, graphic_design, product_design, web_design } = status;

    return (
        <Box
            sx={{
                width: 320,
                pl: '24px',
            }}
        >
            <List
                size="sm"
                sx={(theme) => ({
                    // Gatsby colors
                    '--joy-palette-primary-plainColor': '#8a4baf',
                    '--joy-palette-neutral-plainHoverBg': 'transparent',
                    '--joy-palette-neutral-plainActiveBg': 'transparent',
                    '--joy-palette-primary-plainHoverBg': 'transparent',
                    '--joy-palette-primary-plainActiveBg': 'transparent',
                    [theme.getColorSchemeSelector('dark')]: {
                        '--joy-palette-text-secondary': '#635e69',
                        '--joy-palette-primary-plainColor': '#d48cff',
                    },
                    '--List-insetStart': '32px',
                    '--ListItem-paddingY': '0px',
                    '--ListItem-paddingRight': '16px',
                    '--ListItem-paddingLeft': '21px',
                    '--ListItem-startActionWidth': '0px',
                    '--ListItem-startActionTranslateX': '-50%',
                    [`& .${listItemButtonClasses.root}`]: {
                        borderLeft: '1px solid',
                        borderColor: 'divider',
                    },
                    [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                        borderColor: 'currentColor',
                    },
                    [`& .${listItemClasses.nested} > .${listItemButtonClasses.root}`]: {
                        border: 'none',
                    },
                    '& [class*="startAction"]': {
                        color: 'var(--joy-palette-text-tertiary)',
                    },
                })}
            >
                <ListItem
                    nested
                    sx={{ my: 1 }}
                    startAction={
                        <IconButton
                            variant="plain"
                            size="sm"
                            color="neutral"
                            onClick={() => setOpen(!open)}
                        >
                            <KeyboardArrowDown
                                sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
                            />
                        </IconButton>
                    }
                >
                    <ListItem>
                        <Typography
                            level="inherit"
                            sx={{
                                fontWeight: open ? 'bold' : undefined,
                                color: open ? 'text.primary' : 'inherit',
                            }}
                        >

                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Checkbox checked={customer_service} name="customer_service" onChange={handleChange} label={listData[0].department} />
                            </Box>
                        </Typography>
                        <Typography component="span" level="body3" sx={{ ml: 1 }}>
                            2
                        </Typography>
                    </ListItem>
                    {open && (
                        <List sx={{ '--ListItem-paddingY': '8px' }}>
                            {listData[0].sub_departments.map((ele) => (

                                <Box sx={{ marginLeft: "3rem", display: 'flex', gap: 3 }}>
                                    <Checkbox name={ele} onChange={handleChange} checked={calculateStatus(ele)} label={ele} />
                                </Box>

                            ))}
                        </List>
                    )}
                </ListItem>
                <ListItem
                    nested
                    sx={{ my: 1 }}
                    startAction={
                        <IconButton
                            variant="plain"
                            size="sm"
                            color="neutral"
                            onClick={() => setOpen2((bool) => !bool)}
                        >
                            <KeyboardArrowDown
                                sx={{ transform: open2 ? 'initial' : 'rotate(-90deg)' }}
                            />
                        </IconButton>
                    }
                >
                    <ListItem>
                        <Typography
                            level="inherit"
                            sx={{
                                fontWeight: open2 ? 'bold' : undefined,
                                color: open2 ? 'text.primary' : 'inherit',
                            }}
                        >
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                <Checkbox checked={design} name="design" onChange={handleChange} label={listData[1].department} />
                            </Box>
                            {/* {listData[1].department} */}
                        </Typography>
                        <Typography component="span" level="body3" sx={{ ml: 1 }}>
                            3
                        </Typography>
                    </ListItem>
                    {open2 && (
                        <List sx={{ '--ListItem-paddingY': '8px' }}>
                            {/* <ListItem>
                                <ListItemButton>Overview</ListItemButton>
                            </ListItem> */}
                            {listData[1].sub_departments.map((ele) => (

                                <Box sx={{ marginLeft: "3rem", display: 'flex', gap: 3 }}>
                                    <Checkbox name={ele} onChange={handleChange} checked={calculateStatus(ele)} label={ele} />
                                </Box>

                            ))}
                        </List>
                    )}
                </ListItem>
            </List>
        </Box>
    );
}
