const express = require('express');
const route = express.Router();

// Dashboard
route.get('/', (req, res, next) => {
    res.render('index', { title: 'Dashboard', page_title: 'Dashboard', sub_title: 'Menu' });
})
route.get('/index', (req, res, next) => {
    res.render('index', { title: 'Dashboard', page_title: 'Dashboard', sub_title: 'Menu' });
})

// Apps
route.get('/apps-calendar', (req, res, next) => {
    res.render('apps-calendar', { title: 'Calendar', page_title: 'Calendar', sub_title: 'Apps' });
})
route.get('/apps-file-manager', (req, res, next) => {
    res.render('apps-file-manager', { title: 'File Manager', page_title: 'File Manager', sub_title: 'Apps' });
})
route.get('/apps-kanban', (req, res, next) => {
    res.render('apps-kanban', { title: 'Kanban', page_title: 'Kanban', sub_title: 'Apps' });
})
route.get('/apps-project-create', (req, res, next) => {
    res.render('apps-project-create', { title: 'Create Project', page_title: 'Create Project', sub_title: 'Apps' });
})
route.get('/apps-project-detail', (req, res, next) => {
    res.render('apps-project-detail', { title: 'Project Detail', page_title: 'Project Detail', sub_title: 'Apps' });
})
route.get('/apps-project-list', (req, res, next) => {
    res.render('apps-project-list', { title: 'Project List', page_title: 'Project List', sub_title: 'Apps' });
})
route.get('/apps-tickets', (req, res, next) => {
    res.render('apps-tickets', { title: 'Tickets', page_title: 'Tickets', sub_title: 'Apps' });
})

// Auth Pages
route.get('/auth-login', (req, res, next) => {
    res.render('auth/auth-login', { title: 'Login In', layout: false })
})
route.get('/auth-register', (req, res, next) => {
    res.render('auth/auth-register', { title: 'Register', layout: false })
})
route.get('/auth-lock-screen', (req, res, next) => {
    res.render('auth/auth-lock-screen', { title: 'Lock Screen', layout: false })
})
route.get('/auth-recoverpw', (req, res, next) => {
    res.render('auth/auth-recoverpw', { title: 'Recover Password', layout: false })
})

// Extra Pages
route.get('/pages-starter', (req, res, next) => {
    res.render('pages-starter', { title: 'Starter', page_title: 'Starter', sub_title: 'Extra Pages' });
})
route.get('/pages-timeline', (req, res, next) => {
    res.render('pages-timeline', { title: 'Timeline', page_title: 'Timeline', sub_title: 'Extra Pages' });
})
route.get('/pages-invoice', (req, res, next) => {
    res.render('pages-invoice', { title: 'Invoice', page_title: 'Invoice', sub_title: 'Extra Pages' });
})
route.get('/pages-gallery', (req, res, next) => {
    res.render('pages-gallery', { title: 'Gallery', page_title: 'Gallery', sub_title: 'Extra Pages' });
})
route.get('/pages-faqs', (req, res, next) => {
    res.render('pages-faqs', { title: 'FAQ', page_title: 'FAQ', sub_title: 'Extra Pages' });
})
route.get('/pages-pricing', (req, res, next) => {
    res.render('pages-pricing', { title: 'Pricing', page_title: 'Pricing', sub_title: 'Extra Pages' });
})
route.get('/pages-maintenance', (req, res, next) => {
    res.render('pages-maintenance', { title: 'Maintenance', layout: false })
})
route.get('/pages-coming-soon', (req, res, next) => {
    res.render('pages-coming-soon', { title: 'Coming Soon', layout: false })
})
route.get('/pages-404', (req, res, next) => {
    res.render('pages-404', { title: 'Error Page | 404', layout: false })
})
route.get('/pages-404-alt', (req, res, next) => {
    res.render('pages-404-alt', { title: '404 Alt', page_title: '404 Alt', sub_title: 'Extra Pages', layout: false });
})
route.get('/pages-500', (req, res, next) => {
    res.render('pages-500', { title: 'Error Page | 500', layout: false })
})

// Components
route.get('/ui-accordions', (req, res, next) => {
    res.render('ui-accordions', { title: 'Accordions', page_title: 'Accordions', sub_title: 'Components' });
})
route.get('/ui-alerts', (req, res, next) => {
    res.render('ui-alerts', { title: 'Alerts', page_title: 'Alerts', sub_title: 'Components' });
})
route.get('/ui-avatars', (req, res, next) => {
    res.render('ui-avatars', { title: 'Avatars', page_title: 'Avatars', sub_title: 'Components' });
})
route.get('/ui-buttons', (req, res, next) => {
    res.render('ui-buttons', { title: 'Buttons', page_title: 'Buttons', sub_title: 'Components' });
})
route.get('/ui-badges', (req, res, next) => {
    res.render('ui-badges', { title: 'Badges', page_title: 'Badges', sub_title: 'Components' });
})
route.get('/ui-breadcrumbs', (req, res, next) => {
    res.render('ui-breadcrumbs', { title: 'Breadcrumb', page_title: 'Breadcrumb', sub_title: 'Components' });
})
route.get('/ui-cards', (req, res, next) => {
    res.render('ui-cards', { title: 'Cards', page_title: 'Cards', sub_title: 'Components' });
})
route.get('/ui-collapse', (req, res, next) => {
    res.render('ui-collapse', { title: 'Collapse', page_title: 'Collapse', sub_title: 'Components' });
})
route.get('/ui-dismissible', (req, res, next) => {
    res.render('ui-dismissible', { title: 'Dismissible', page_title: 'Dismissible', sub_title: 'Components' });
})
route.get('/ui-dropdowns', (req, res, next) => {
    res.render('ui-dropdowns', { title: 'Dropdowns', page_title: 'Dropdowns', sub_title: 'Components' });
})
route.get('/ui-progress', (req, res, next) => {
    res.render('ui-progress', { title: 'Progress', page_title: 'Progress', sub_title: 'Components' });
})
route.get('/ui-skeleton', (req, res, next) => {
    res.render('ui-skeleton', { title: 'Skeleton', page_title: 'Skeleton', sub_title: 'Components' });
})
route.get('/ui-spinners', (req, res, next) => {
    res.render('ui-spinners', { title: 'Spinners', page_title: 'Spinners', sub_title: 'Components' });
})
route.get('/ui-list-group', (req, res, next) => {
    res.render('ui-list-group', { title: 'List Group', page_title: 'List Group', sub_title: 'Components' });
})
route.get('/ui-ratio', (req, res, next) => {
    res.render('ui-ratio', { title: 'Aspect Ratio', page_title: 'Aspect Ratio', sub_title: 'Components' });
})
route.get('/ui-tabs', (req, res, next) => {
    res.render('ui-tabs', { title: 'Tabs', page_title: 'Tabs', sub_title: 'Components' });
})
route.get('/ui-modals', (req, res, next) => {
    res.render('ui-modals', { title: 'Modals', page_title: 'Modals', sub_title: 'Components' });
})
route.get('/ui-offcanvas', (req, res, next) => {
    res.render('ui-offcanvas', { title: 'Offcanvas', page_title: 'Offcanvas', sub_title: 'Components' });
})
route.get('/ui-popovers', (req, res, next) => {
    res.render('ui-popovers', { title: 'Popovers', page_title: 'Popovers', sub_title: 'Components' });
})
route.get('/ui-tooltips', (req, res, next) => {
    res.render('ui-tooltips', { title: 'Tooltips', page_title: 'Tooltips', sub_title: 'Components' });
})
route.get('/ui-typography', (req, res, next) => {
    res.render('ui-typography', { title: 'Typography', page_title: 'Typography', sub_title: 'Components' });
})

// Extended
route.get('/extended-swiper', (req, res, next) => {
    res.render('extended-swiper', { title: 'Swiper', page_title: 'Swiper', sub_title: 'Extended' });
})
route.get('/extended-nestable', (req, res, next) => {
    res.render('extended-nestable', { title: 'Nestable', page_title: 'Nestable', sub_title: 'Extended' });
})
route.get('/extended-ratings', (req, res, next) => {
    res.render('extended-ratings', { title: 'Ratings', page_title: 'Ratings', sub_title: 'Extended' });
})
route.get('/extended-animation', (req, res, next) => {
    res.render('extended-animation', { title: 'Animation', page_title: 'Animation', sub_title: 'Extended' });
})
route.get('/extended-nestable', (req, res, next) => {
    res.render('extended-nestable', { title: 'Nestable', page_title: 'Nestable', sub_title: 'Extended' });
})
route.get('/extended-player', (req, res, next) => {
    res.render('extended-player', { title: 'Player', page_title: 'Player', sub_title: 'Extended' });
})
route.get('/extended-scrollbar', (req, res, next) => {
    res.render('extended-scrollbar', { title: 'Scrollbar', page_title: 'Scrollbar', sub_title: 'Extended' });
})
route.get('/extended-sweet-alert', (req, res, next) => {
    res.render('extended-sweet-alert', { title: 'Sweet Alert', page_title: 'Sweet Alert', sub_title: 'Extended' });
})
route.get('/extended-tour', (req, res, next) => {
    res.render('extended-tour', { title: 'Tour', page_title: 'Tour', sub_title: 'Extended' });
})
route.get('/extended-tippy-tooltips', (req, res, next) => {
    res.render('extended-tippy-tooltips', { title: 'Tippy Tooltips', page_title: 'Tippy Tooltips', sub_title: 'Extended' });
})
route.get('/extended-lightbox', (req, res, next) => {
    res.render('extended-lightbox', { title: 'Lightbox', page_title: 'Lightbox', sub_title: 'Extended' });
})

// Forms
route.get('/forms-elements', (req, res, next) => {
    res.render('forms-elements', { title: 'Elements', page_title: 'Elements', sub_title: 'Form' });
})
route.get('/forms-select', (req, res, next) => {
    res.render('forms-select', { title: 'Select', page_title: 'Select', sub_title: 'Form' });
})
route.get('/forms-range', (req, res, next) => {
    res.render('forms-range', { title: 'Range', page_title: 'Range', sub_title: 'Form' });
})
route.get('/forms-pickers', (req, res, next) => {
    res.render('forms-pickers', { title: 'Pickers', page_title: 'Pickers', sub_title: 'Form' });
})
route.get('/forms-masks', (req, res, next) => {
    res.render('forms-masks', { title: 'Masks', page_title: 'Masks', sub_title: 'Form' });
})
route.get('/forms-editor', (req, res, next) => {
    res.render('forms-editor', { title: 'Editor', page_title: 'Editor', sub_title: 'Form' });
})
route.get('/forms-file-uploads', (req, res, next) => {
    res.render('forms-file-uploads', { title: 'File Uploads', page_title: 'File Uploads', sub_title: 'Form' });
})
route.get('/forms-validation', (req, res, next) => {
    res.render('forms-validation', { title: 'Validation', page_title: 'Validation', sub_title: 'Form' });
})
route.get('/forms-layout', (req, res, next) => {
    res.render('forms-layout', { title: 'Layout', page_title: 'Layout', sub_title: 'Form' });
})

// Tables
route.get('/tables-basic', (req, res, next) => {
    res.render('tables-basic', { title: 'Basic Tables', page_title: 'Basic Tables', sub_title: 'Tables' });
})
route.get('/tables-datatables', (req, res, next) => {
    res.render('tables-datatables', { title: 'Data Tables', page_title: 'Data Tables', sub_title: 'Tables' });
})

// Icons
route.get('/icons-mingcute', (req, res, next) => {
    res.render('icons-mingcute', { title: 'MingCute', page_title: 'MingCute', sub_title: 'Icons' });
})
route.get('/icons-feather', (req, res, next) => {
    res.render('icons-feather', { title: 'Feather', page_title: 'Feather', sub_title: 'Icons' });
})
route.get('/icons-material-symbols', (req, res, next) => {
    res.render('icons-material-symbols', { title: 'Material Symbols Icons', page_title: 'Material Symbols Icons', sub_title: 'Icons' });
})

// Chart
route.get('/charts', (req, res, next) => {
    res.render('charts', { title: 'Charts', page_title: 'Charts', sub_title: 'Elements' });
})

// Maps
route.get('/maps-vector', (req, res, next) => {
    res.render('maps-vector', { title: 'Vector', page_title: 'Vector', sub_title: 'Elements' });
})
route.get('/maps-google', (req, res, next) => {
    res.render('maps-google', { title: 'Google', page_title: 'Google', sub_title: 'Elements' });
})

// Docs
route.get('/docs-introduction', (req, res, next) => {
    res.render('docs-introduction', { title: 'Introducation', page_title: 'Introducation', sub_title: 'Documentation' });
})
route.get('/docs-installation', (req, res, next) => {
    res.render('docs-installation', { title: 'Installation', page_title: 'Installation', sub_title: 'Documentation' });
})
route.get('/docs-customization', (req, res, next) => {
    res.render('docs-customization', { title: 'Customization', page_title: 'Customization', sub_title: 'Documentation' });
})
route.get('/docs-changelog', (req, res, next) => {
    res.render('docs-changelog', { title: 'Changelog', page_title: 'Changelog', sub_title: 'Documentation' });
})

// Layouts
route.get('/layout-compact-view', (req, res, next) => {
    res.render('layout-compact-view', { title: 'Compact View', page_title: 'Compact View', sub_title: 'Layout', layout: 'partials/layout-sidenav' })
})
route.get('/layout-hidden', (req, res, next) => {
    res.render('layout-hidden', { title: 'Hidden View', page_title: 'Hidden View', sub_title: 'Layout', layout: 'partials/layout-sidenav' })
})
route.get('/layout-hover-view', (req, res, next) => {
    res.render('layout-hover-view', { title: 'Hover View', page_title: 'Hover View', sub_title: 'Layout', layout: 'partials/layout-sidenav' })
})
route.get('/layout-icon-view', (req, res, next) => {
    res.render('layout-icon-view', { title: 'Icon View', page_title: 'Icon View', sub_title: 'Layout', layout: 'partials/layout-sidenav' })
})
route.get('/layout-mobile-view', (req, res, next) => {
    res.render('layout-mobile-view', { title: 'Mobile View', page_title: 'Mobile View', sub_title: 'Layout', layout: 'partials/layout-sidenav' })
})


module.exports = route;