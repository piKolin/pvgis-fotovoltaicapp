// https://joint-research-centre.ec.europa.eu/pvgis-online-tool/getting-started-pvgis/api-non-interactive-service_en

const API_URL = 'https://re.jrc.ec.europa.eu/api/';

export const GRID_AND_TRACK_ENDPOINT = API_URL + 'PVcalc?outputformat=json&';
export const OFF_GRID_ENDPOINT = API_URL + 'SHScalc?outputformat=json&';
export const MONTHLY_ENDPOINT = API_URL + 'MRcalc?outputformat=json&';
export const DAILY_ENDPOINT = API_URL + 'DRcalc?outputformat=json&';
export const HOURLY_ENDPOINT = API_URL + 'seriescalc?outputformat=json&';
export const TMY_ENDPOINT = API_URL + 'tmy?outputformat=json&';
