import {mount} from 'react-mounter';

import DashPage from './../../ui/pages/DashPage.jsx';



FlowRouter.route('/', {
    action: function(params, queryParams) {
        mount(DashPage);
    }
});