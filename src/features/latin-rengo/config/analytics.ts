const fallbackMeasurementId = 'G-ZHC6YJ53ZX';
const envMeasurementId = import.meta.env.PUBLIC_GA_MEASUREMENT_ID?.trim();
const disabledMeasurementIds = new Set(['off', 'disabled', 'false']);

export const gaMeasurementId =
	envMeasurementId && disabledMeasurementIds.has(envMeasurementId.toLowerCase())
		? ''
		: envMeasurementId || fallbackMeasurementId;
export const gaConsentStorageKey = 'latinRengo.analyticsConsent.v1';
