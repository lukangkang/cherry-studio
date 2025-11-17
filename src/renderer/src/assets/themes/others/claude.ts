import type { Theme } from '../../../lib/types'

export const claude: Theme = {
  id: 'claude',
  name: 'Claude',
  description: 'Theme inspired by Claude',
  lightPreviewUrl: '/claude.png',
  darkPreviewUrl: '/claude.png',
  css: `/* 

========================

Claude

========================

Theme inspired by Claude's distinctive aesthetic with soft whites and neutral grays

*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F7F2;
    --color-black-soft: #2A2B2A;

    /* Primary color (accent color) and variants */
    --color-primary: #EA928A;
    --color-primary-soft: rgba(234, 146, 138, 0.6);
    --color-primary-mute: rgba(234, 146, 138, 0.2);
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    --color-background: #30302e;
    --color-background-mute: #282C34;
    --color-background-soft: #303030;

    --navbar-background-mac: rgba(42, 43, 42, 0.8);
    --navbar-background: var(--color-black-soft);
    --chat-background: #30302e;
    --chat-background-user: #323332;
    --chat-background-assistant: #3b3b39;

    --chat-text-user: var(--color-white-soft);
    --color-text: var(--color-white-soft);

    --color-hover: #3D3D3A;
    --color-active: #444442;

    --color-border: #5E5D5940;
    --color-border-soft: #5E5D5920;
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: var(--chat-background-assistant) !important;
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #3F3F3D;
}
body[theme-mode="dark"] .ant-collapse-content {
    background-color: #353533;
}

/* Additional dark mode specific styles */
body[theme-mode="dark"] #content-container #messages {
    background-color: #30302e;
}
body[theme-mode="dark"] .inputbar-container {
    background-color: #3D3D3A;
    border: 1px solid #5E5D5940;
    border-radius: 8px;
}
body[theme-mode="dark"] .bubble #inputbar {
    background-color: #3d3d3a;
}

/* Code styling */
body[theme-mode="dark"] code {
    background-color: #E5E5E20D;
    color: #EA928A;
}
body[theme-mode="dark"] pre code {
    color: #ABB2BF;
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    --color-background: #EBE8E2;
    --color-background-mute: #E4E1D7;
    --color-background-soft: #CBC7BE;

    --navbar-background: #e8e6dc;
    --chat-background: #EBE8E2;
    --chat-background-user: #e8e6dc;
    --chat-background-assistant: #fefefd;

    --color-text: #2A2B2A;

    --color-hover: #f0ede7;
    --color-active: #e4e1d9;

    --color-border: #87867F40;
    --color-border-soft: #87867F20;

    --color-white: #FFFFFF;
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #EBE8E2 !important;
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #D8D5CD;
}
body[theme-mode="light"] .ant-collapse-content {
    background-color: #E2DFD7;
}

/* Additional light mode specific styles */
body[theme-mode="light"] #content-container #messages {
    background-color: #EBE8E2;
}
body[theme-mode="light"] .inputbar-container {
    background-color: #FFFFFF;
    border: 1px solid #87867F40;
    border-radius: 8px;
}
body[theme-mode="light"] .bubble #inputbar {
    background-color: #ffffff;
}

/* Code styling */
body[theme-mode="light"] code {
    background-color: #3D39290D;
    color: #7C1B13;
}
body[theme-mode="light"] pre code {
    color: #000000;
}`
}