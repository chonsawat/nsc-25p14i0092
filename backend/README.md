### How to install backends environments
1. Create environment
```
conda create --name nsc python=3.10
```
2. Activate environment
```
conda activate nsc
```
2. Install requirements
```
pip install -r requirements.txt
```

### How to run api server
1. Activate environment
```
conda activate nsc
```
2. Run api server
```
uvicorn main:app --reload
```
