import pandas

def handler(event, context) -> None:
    print(f"Hello, Python! {pandas.__version__}")
