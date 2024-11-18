from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from salvaExcel import salvaExcel





chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

servico = Service(ChromeDriverManager().install())

buscaValores = webdriver.Chrome(service=servico, options=chrome_options)
navegador = webdriver.Chrome(service=servico, options=chrome_options)


anoLimite = 2023


def pegarVisivel(xpath):
    return WebDriverWait(navegador, 10).until(EC.visibility_of_element_located((By.XPATH, xpath)))


marcas = [
  {"marca": "ASTON MARTIN", "link": "https://www.chavesnamao.com.br/tabela-fipe/aston-martin/"},
  {"marca": "AUDI", "link": "https://www.chavesnamao.com.br/tabela-fipe/audi/"},
  {"marca": "BMW", "link": "https://www.chavesnamao.com.br/tabela-fipe/bmw/"},
  {"marca": "CAOA CHERY", "link": "https://www.chavesnamao.com.br/tabela-fipe/caoa-chery/"},
  {"marca": "CHEVROLET", "link": "https://www.chavesnamao.com.br/tabela-fipe/chevrolet/"},
  {"marca": "CITROËN", "link": "https://www.chavesnamao.com.br/tabela-fipe/citroen/"},
  {"marca": "FERRARI", "link": "https://www.chavesnamao.com.br/tabela-fipe/ferrari/"},
  {"marca": "FIAT", "link": "https://www.chavesnamao.com.br/tabela-fipe/fiat/"},
  {"marca": "FORD", "link": "https://www.chavesnamao.com.br/tabela-fipe/ford/"},
  {"marca": "HONDA", "link": "https://www.chavesnamao.com.br/tabela-fipe/honda/"},
  {"marca": "HYUNDAI", "link": "https://www.chavesnamao.com.br/tabela-fipe/hyundai/"},
  {"marca": "JAGUAR", "link": "https://www.chavesnamao.com.br/tabela-fipe/jaguar/"},
  {"marca": "JEEP", "link": "https://www.chavesnamao.com.br/tabela-fipe/jeep/"},
  {"marca": "KIA", "link": "https://www.chavesnamao.com.br/tabela-fipe/kia/"},
  {"marca": "LAMBORGHINI", "link": "https://www.chavesnamao.com.br/tabela-fipe/lamborghini/"},
  {"marca": "LAND ROVER", "link": "https://www.chavesnamao.com.br/tabela-fipe/land-rover/"},
  {"marca": "LEXUS", "link": "https://www.chavesnamao.com.br/tabela-fipe/lexus/"},
  {"marca": "MCLAREN", "link": "https://www.chavesnamao.com.br/tabela-fipe/mclaren/"},
  {"marca": "MERCEDES-BENZ", "link": "https://www.chavesnamao.com.br/tabela-fipe/mercedes-benz/"},
  {"marca": "MINI", "link": "https://www.chavesnamao.com.br/tabela-fipe/mini/"},
  {"marca": "MITSUBISHI", "link": "https://www.chavesnamao.com.br/tabela-fipe/mitsubishi/"},
  {"marca": "NISSAN", "link": "https://www.chavesnamao.com.br/tabela-fipe/nissan/"},
  {"marca": "PEUGEOT", "link": "https://www.chavesnamao.com.br/tabela-fipe/peugeot/"},
  {"marca": "PORSCHE", "link": "https://www.chavesnamao.com.br/tabela-fipe/porsche/"},
  {"marca": "RENAULT", "link": "https://www.chavesnamao.com.br/tabela-fipe/renault/"},
  {"marca": "RAM", "link": "https://www.chavesnamao.com.br/tabela-fipe/ram/"},
  {"marca": "TOYOTA", "link": "https://www.chavesnamao.com.br/tabela-fipe/toyota/"},
  {"marca": "VOLKSWAGEN", "link": "https://www.chavesnamao.com.br/tabela-fipe/volkswagen/"},
  {"marca": "VOLVO", "link": "https://www.chavesnamao.com.br/tabela-fipe/volvo/"}
]


for marca in marcas:
    navegador.get(marca["link"])
    modelos = navegador.find_elements(By.XPATH, '//*[@id="mainContent"]/article/section[1]/ul/li')
    modelos = [modelo.text for modelo in modelos]
    for modelo in modelos:
        navegador.get(f"{marca['link']}{modelo}")
        anos = navegador.find_elements(By.XPATH, '//*[@id="mainContent"]/article/section[1]/ul/li')
        for ano in range(1, len(anos) + 1):
            try:
                elemento = navegador.find_element(By.XPATH, f'//*[@id="mainContent"]/article/section[1]/ul/li[{ano}]/a/h2/b')
                if ( elemento.text == '0km' or int(elemento.text) >= anoLimite):
                    buscaValores.get(f"{marca['link']}{modelo.replace(' ', '-')}/{elemento.text}")
                    versao = buscaValores.find_element(By.XPATH, '//*[@id="mainContent"]/article/section[1]/table/tbody/tr[1]/td[1]/a')
                    codFipe = buscaValores.find_element(By.XPATH, '//*[@id="mainContent"]/article/section[1]/table/tbody/tr[1]/td[2]')
                    valor = buscaValores.find_element(By.XPATH, '//*[@id="mainContent"]/article/section[1]/table/tbody/tr/td[3]/b')
                    
                    dados = {
                        'Marca': [marca['marca']],
                        'Modelo': [modelo],
                        'Ano': [elemento.text],
                        'Versão': [versao.text],
                        'Codigo FIPE': [codFipe.text],
                        'Preço': [valor.text]
                    }


                    salvaExcel(dados)

                pass
            except:
                pass








