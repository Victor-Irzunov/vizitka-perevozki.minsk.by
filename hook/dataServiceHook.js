export const useDataService = async (link) => {
	let data;

	switch (link) {
		case 'arenda-samosvala':
			const { obj } = await import('../constants/service/ArendaSamosvalaConst');
			data = obj
			break
		case 'arenda-trala':
			const { obj2 } = await import('../constants/service/ArendaTralaConst');
			data = obj2
			break
		case 'arenda-frontalnyh-pogruzchikov':
			const { obj3 } = await import('../constants/service/ArendaFrontalnyhConst');
			data = obj3
			break
		case 'arenda-kolesnogo-ekskavatora':
			const { obj4 } = await import('../constants/service/ArendaKolesnogoConst');
			data = obj4
			break
		case 'arenda-exkavatora-pogruzchika':
			const { obj5 } = await import('../constants/service/ArendaExkavatoraPogruzchika');
			data = obj5
			break
		case 'arenda-gusenichnogo-ekskavatora':
			const { obj6 } = await import('../constants/service/ArendaEkskavatoryGusenichnye');
			data = obj6
			break
	}
	return {
		data
	};
}