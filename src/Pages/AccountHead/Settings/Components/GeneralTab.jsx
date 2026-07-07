import React, { useState } from 'react'
import {
    ACADEMIC_YEARS,
    BOOKS_CLOSURE_TOGGLES,
    CURRENCIES,
    DATE_FORMATS,
    FINANCIAL_YEAR_STARTS,
    GENERAL_SETTINGS,
    NUMBER_FORMATS,
    TERM_STRUCTURES,
} from '../settingsData'
import {
    FormField,
    FormGrid,
    SettingRow,
    SettingsPanel,
    fieldClass,
} from './SettingsShared'

const GeneralTab = () => {
    const [general, setGeneral] = useState(GENERAL_SETTINGS)
    const [booksClosure, setBooksClosure] = useState(BOOKS_CLOSURE_TOGGLES)

    const updateGeneral = (key, value) => {
        setGeneral((prev) => ({ ...prev, [key]: value }))
    }

    const toggleBooksClosure = (id) => {
        setBooksClosure((prev) =>
            prev.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item)),
        )
    }

    return (
        <div className='space-y-6'>
            <SettingsPanel title='Institution & financial year'>
                <FormGrid>
                    <FormField label='School / Institution Name'>
                        <input
                            type='text'
                            value={general.institutionName}
                            onChange={(event) => updateGeneral('institutionName', event.target.value)}
                            className={fieldClass}
                        />
                    </FormField>
                    <FormField label='GSTIN'>
                        <input
                            type='text'
                            value={general.gstin}
                            onChange={(event) => updateGeneral('gstin', event.target.value)}
                            className={fieldClass}
                        />
                    </FormField>
                    <FormField label='Current Academic Year'>
                        <select
                            value={general.academicYear}
                            onChange={(event) => updateGeneral('academicYear', event.target.value)}
                            className={fieldClass}
                        >
                            {ACADEMIC_YEARS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </FormField>
                    <FormField label='Financial Year Start Month'>
                        <select
                            value={general.financialYearStart}
                            onChange={(event) => updateGeneral('financialYearStart', event.target.value)}
                            className={fieldClass}
                        >
                            {FINANCIAL_YEAR_STARTS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </FormField>
                </FormGrid>
            </SettingsPanel>

            <SettingsPanel title='Currency & formatting'>
                <FormGrid>
                    <FormField label='Currency'>
                        <select
                            value={general.currency}
                            onChange={(event) => updateGeneral('currency', event.target.value)}
                            className={fieldClass}
                        >
                            {CURRENCIES.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </FormField>
                    <FormField label='Number Format'>
                        <select
                            value={general.numberFormat}
                            onChange={(event) => updateGeneral('numberFormat', event.target.value)}
                            className={fieldClass}
                        >
                            {NUMBER_FORMATS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </FormField>
                    <FormField label='Date Format'>
                        <select
                            value={general.dateFormat}
                            onChange={(event) => updateGeneral('dateFormat', event.target.value)}
                            className={fieldClass}
                        >
                            {DATE_FORMATS.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </FormField>
                    <FormField label='Default Term Structure'>
                        <select
                            value={general.termStructure}
                            onChange={(event) => updateGeneral('termStructure', event.target.value)}
                            className={fieldClass}
                        >
                            {TERM_STRUCTURES.map((item) => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </FormField>
                </FormGrid>
            </SettingsPanel>

            <SettingsPanel title='Books closure'>
                {booksClosure.map((item) => (
                    <SettingRow
                        key={item.id}
                        label={item.label}
                        sub={item.sub}
                        enabled={item.enabled}
                        onChange={() => toggleBooksClosure(item.id)}
                    />
                ))}
            </SettingsPanel>
        </div>
    )
}

export default GeneralTab
