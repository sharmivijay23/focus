import { Button, TextInput } from "flowbite-react";
import useAppStore from "../stores/app-store";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const NameForm = () => {
  const { setUsername } = useAppStore();
  const [firstname, setFirstname] = useState('')
  const { t } = useTranslation('common');
  const welcomeMessage = t('welcomeTemplate').replace('{{appName}}', t('appName'));

  return (
    <div className="flex max-w-md flex-col gap-4 bg-white p-20 py-10 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">{welcomeMessage}</h1>
      <h2 className="text-lg text-center">How should we call you?</h2>
      <div className="flex justify-between gap-2">
        <TextInput className="grow" type="text" placeholder="First Name"  value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        <Button onClick={() => setUsername(firstname)}> → </Button>
      </div>
      <div className="text-xs text-center mt-10">In offline mode your data is stored locally.</div>
    </div>
  )
}

export default NameForm;