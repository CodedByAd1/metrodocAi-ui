# KMRL DocAI - Mobile App

A professional mobile app UI mockup designed specifically for Kochi Metro Rail Limited (KMRL) document management challenges, addressing the complex, multidisciplinary document processing needs across metro operations.

## KMRL-Specific Solutions

### � Core Problems Addressed
- **Information Latency**: AI-powered document summaries eliminate hours of manual review
- **Siloed Awareness**: Cross-departmental impact analysis prevents coordination gaps
- **Compliance Exposure**: Automated CMRS and MOHUA directive tracking with deadline alerts
- **Knowledge Attrition**: Institutional memory linking connects related documents across time
- **Duplicated Effort**: Single source of truth with multi-language support (English/Malayalam)

### 📱 Mobile-First Design
- **Dashboard**: CMRS compliance, Maximo job cards, safety bulletins, productivity metrics
- **Document Capture**: Supports all KMRL document types (invoices, job cards, regulatory directives)
- **Document Details**: AI summaries, cross-departmental impact analysis, Malayalam translation status
- **Search Interface**: KMRL-specific filters (CMRS, MOHUA, vendor payments, safety bulletins)
- **User Profile**: KMRL organizational roles (Rolling Stock Technician to Executive Director)

### 🎨 Design System
- **Colors**: Professional blue (#1e40af) and green (#059669) scheme
- **Typography**: Inter font family with crisp, readable text
- **Icons**: Lucide React icons for consistency
- **Layout**: Mobile-optimized with touch-friendly interfaces

### 🚀 Technical Stack
- **Framework**: React 18 with Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: CSS Custom Properties (CSS Variables)

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build
```bash
npm run build
```

## KMRL User Roles & Dashboards

### 1. **Station Controller / Field Operator**
- **My Tasks**: Pending safety checks, incident reports, maintenance requests
- **Quick Actions**: Document upload (scan/photo), search past reports
- **AI Summaries**: Real-time processing of new safety bulletins and directives
- **Status Updates**: Live platform status, passenger counts, equipment health
- **Approvals**: Simple approve/reject for routine forms and requests

### 2. **Maintenance Technician / Engineer**
- **Work Orders**: Assigned tasks with priority indicators and estimated time
- **Asset History**: Equipment maintenance records and technical manuals
- **Document DNA**: Linked incident reports, job cards, and related documents
- **Photo Upload**: Attach completion certificates and progress photos
- **Status Updates**: In Progress, Awaiting Parts, Completed workflow
- **Alerts**: New assignments, overdue tasks, parts availability

### 3. **Department Manager (Operations, Finance, HR, etc.)**
- **Approval Queue**: Invoices, purchase orders, job cards requiring approval
- **KPIs**: Average resolution time, compliance status, budget tracking
- **Analytics**: Incident trends, recurring issues, staff workload analysis
- **Compliance**: Deadline tracking for CMRS, MOHUA requirements
- **Delegation**: Assign tasks and approvals to team members
- **Audit Trail**: Complete history of actions and decisions

### 4. **Executive Director / Senior Management**
- **Executive Summary**: Network health, compliance scores, financial metrics
- **Strategic Insights**: AI-powered bottleneck alerts, cost predictions, efficiency recommendations
- **Department Drill-down**: Performance metrics across all departments
- **Automated Reports**: Weekly/monthly summaries and board presentations
- **Global Search**: Access to any document or topic across the organization
- **Compliance Overview**: Audit status, regulatory requirements, risk assessment

## Document Types Supported

- **CMRS Circulars**: Commissioner of Metro Rail Safety directives
- **Maximo Job Cards**: Equipment maintenance and inspection records
- **Vendor Invoices**: Procurement and payment documentation
- **MOHUA Directives**: Ministry of Housing & Urban Affairs regulations
- **Engineering Drawings**: Technical specifications and blueprints
- **Safety Bulletins**: Emergency protocols and safety updates
- **Board Minutes**: Executive decisions and strategic planning
- **Environmental Studies**: Compliance and impact assessments

## Screen Navigation

- **Dashboard** (`/`): Main overview with task summaries
- **Document Capture** (`/capture`): Scan and upload documents
- **Document Detail** (`/document/:id`): View document details and approve/reject
- **Search** (`/search`): Search documents with filters
- **Profile** (`/profile`): User settings and role management

## Mobile Optimization

- Responsive design for mobile devices (414px max width)
- Touch-friendly interface elements
- Optimized for portrait orientation
- Professional enterprise-grade UI/UX+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
