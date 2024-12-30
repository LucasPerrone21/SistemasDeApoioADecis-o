import pandas as pd
from sklearn.decomposition import FactorAnalysis
import numpy as np

# Carregar os dados
df = pd.read_excel('../Banco de Dados.xlsx',  sheet_name='SemOutlier')

# Selecionar as colunas numéricas para a análise
df_numerico = df.select_dtypes(include=[np.number])

# Realizar uma análise fatorial inicial
fa = FactorAnalysis()

# Ajustar o modelo para os dados
fa.fit(df_numerico)

# Exibir os eigenvalues dos fatores
eigenvalues = fa.noise_variance_

print("Eigenvalues (variância explicada por cada fator):")
print(eigenvalues)

# Determinar o número de fatores a partir do critério de Kaiser (Eigenvalue > 1)
num_fatores = np.sum(eigenvalues > 1)
print(f"\nNúmero de fatores com eigenvalue > 1: {num_fatores}")

# Agora, você pode ajustar o número de fatores para o número determinado
fa = FactorAnalysis(n_components=num_fatores)
fa.fit(df_numerico)

# Obter os coeficientes (loadings)
coeficientes = fa.components_

# Exibir os coeficientes (loadings) dos fatores
print("\nCoeficientes (loadings) para cada fator:")
for i, coef in enumerate(coeficientes):
    print(f"Fator {i+1}:")
    for col, value in zip(df_numerico.columns, coef):
        print(f"  {col}: {value:.4f}")
