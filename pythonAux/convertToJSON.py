import openpyxl
import json

def xlsx_to_json(file_path, sheet_name=None):
    # Abrir o arquivo XLSX
    workbook = openpyxl.load_workbook(file_path)
    
    # Selecionar a planilha (ou usar a primeira por padrão)
    sheet = workbook[sheet_name] if sheet_name else workbook.active
    
    # Ler os cabeçalhos da planilha (primeira linha)
    headers = [cell.value for cell in sheet[1]]
    
    # Processar cada linha da planilha
    json_data = []
    for row in sheet.iter_rows(min_row=2, values_only=True):
        # Criar um dicionário para cada linha com base nos cabeçalhos
        row_data = {headers[i]: value for i, value in enumerate(row)}
        json_data.append(row_data)
    
    # Retornar os dados em formato JSON
    return json_data

# Exemplo de uso
file_path = "bancoDeDados.xlsx"  # Substitua pelo caminho da sua planilha
sheet_name = "DadosFinais"  # Defina o nome da planilha ou deixe como None para usar a primeira

try:
    data = xlsx_to_json(file_path, sheet_name)
    json_output = json.dumps(data, indent=4, ensure_ascii=False)
    print(json_output)
    
    # Opcional: salvar em um arquivo JSON
    with open("output.json", "w", encoding="utf-8") as json_file:
        json_file.write(json_output)
        print("Dados salvos em 'output.json'")
except Exception as e:
    print(f"Erro: {e}")
