import React, { useState, useEffect } from 'react';
import { updateSettings } from '../services/api';

const Settings = () => {
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');

  useEffect(() => {
    setPrefix(process.env.PROMPT_PREFIX || '');
    setSuffix(process.env.PROMPT_SUFFIX || '');
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateSettings({ PROMPT_PREFIX: prefix, PROMPT_SUFFIX: suffix });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prompt Prefix:
        <input type="text" value={prefix} onChange={(e) => setPrefix(e.target.value)} />
      </label>
      <label>
        Prompt Suffix:
        <input type="text" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Settings;
