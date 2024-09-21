// app/account/page.tsx


import AccountActions from "@/app/components/account/AccountActions";
import AccountDetails from "@/app/components/account/AccountDetails";
import ChangePassword from "@/app/components/account/ChangePassword";
import PaymentServices from "@/app/components/account/PaymentServices";


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
