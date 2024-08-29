from typing import Optional

from pydantic import BaseModel, ConfigDict


class SHomeContentAdd(BaseModel):
    name: str
    description: Optional[str] = None
    
    
class SHomeContent(SHomeContentAdd):
    id: int
    model_config = ConfigDict(from_attributes=True)


class STaskHomeContentId(BaseModel):
    ok: bool = True
    content_id: int

class SElectricityHours(BaseModel):
    hours: str