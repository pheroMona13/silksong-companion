import { resetAllChecked } from '../../database/db';
import './OptionsPage.scss';

function OptionsPage() {
  const handleResetAllChecked = () => {
    if (confirm('Are you sure that you want to reset all checked items?')) {
      if (confirm('The process is irreversible, Are you sure?')) {
        resetAllChecked();
      }
    }
  };

  return (
    <div className="OptionsPage">
      <div className="card" onClick={handleResetAllChecked}>
        Reset All Checked Data
      </div>
    </div>
  );
}

export default OptionsPage;
