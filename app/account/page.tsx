// app/account/page.tsx


import AccountActions from "../components/account/AccountActions";
import AccountDetails from "../components/account/AccountDetails";
import ChangePassword from "../components/account/ChangePassword";
import PaymentServices from "../components/account/PaymentServices";

export default function AccountSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-cyan-700 mb-8">Account Settings</h1>
      
      {/* Account Details Section */}
      < AccountDetails/>
      
      {/* Change Password Section */}
      <ChangePassword />
      
      {/* Payment Services Section */}
      <PaymentServices />
      
      {/* Account Actions Section */}
      <AccountActions />

      
    </div>
  );
}
