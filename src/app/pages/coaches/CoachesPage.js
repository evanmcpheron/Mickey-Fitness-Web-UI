import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.default,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

const CoachesPage = (props) => {
  return (
    <Root
      header={
        <div className="p-24">
          <h4>HERO BAR GOES HERE (SLIDER THING)</h4>
        </div>
      }
      content={<div className="p-24">COACHES</div>}
      scroll="content"
    />
  );
};

export default CoachesPage;
