export const FETCH_TEMP_SUCCESS = "FETCH_TEMP_SUCCESS"

export const fetchTempSuccess = () => ({ type: FETCH_TEMP_SUCCESS });

export const INC_TEMP_SUCCESS = "INC_TEMP_SUCCESS"

export const incTempSuccess = data => ({ type: INC_TEMP_SUCCESS, data });

export const DEC_TEMP_SUCCESS = "DEC_TEMP_SUCCESS"

export const decTempSuccess = data => ({ type: DEC_TEMP_SUCCESS, data });