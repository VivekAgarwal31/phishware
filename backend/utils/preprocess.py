from urllib.parse import urlparse

def extract_url_features(url: str) -> dict:
    """Very simple URL feature extractor placeholder.
    Replace with real parsing/feature engineering later.
    """
    parts = urlparse(url)
    return {
        "scheme": parts.scheme,
        "netloc_len": len(parts.netloc),
        "path_len": len(parts.path),
        "num_dots": parts.netloc.count('.'),
        "has_at": '@' in url,
        "has_ip": any(c.isdigit() for c in parts.netloc) and parts.netloc.count('.') >= 3,
    }
