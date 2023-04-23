// https://joint-research-centre.ec.europa.eu/pvgis-online-tool/getting-started-pvgis/api-non-interactive-service_en

const API_URL = 'https://re.jrc.ec.europa.eu/api/v5_2/';
const JSON_OUTPUT_FORMAT = 'outputformat=json';

export const API_ENDPOINTS = {
	GRID_AND_TRACK: API_URL + 'PVcalc?' + JSON_OUTPUT_FORMAT + '&',
	OFF_GRID: API_URL + 'SHScalc?' + JSON_OUTPUT_FORMAT + '&',
	MONTHLY: API_URL + 'MRcalc?' + JSON_OUTPUT_FORMAT + '&',
	HOURLY: API_URL + 'seriescalc?' + JSON_OUTPUT_FORMAT + '&',
	DAILY: API_URL + 'DRcalc?' + JSON_OUTPUT_FORMAT + '&',
	TMY: API_URL + 'tmy?' + JSON_OUTPUT_FORMAT + '&',
};

export const PV_TECHNOLOGY_OPTIONS = [
	{ label: 'Silicio cristalino', value: 'crystSi' },
	{ label: 'CIS', value: 'CIS' },
	{ label: 'CdTe', value: 'CdTe' },
	{ label: 'Desconocido', value: 'Unknown' },
];

export const MOUNTINGPLACE_OPTIONS = [
	{ label: 'Posición libre', value: 'free' },
	{ label: 'Sobre tejado', value: 'building' },
];

export const DATABASES_OPTIONS = [
	{ label: 'PVGIS-SARAH2', value: 'PVGIS-SARAH2' },
	{ label: 'PVGIS-SARAH', value: 'PVGIS-SARAH' },
	{ label: 'PVGIS-ERA5', value: 'PVGIS-ERA5' },
];
