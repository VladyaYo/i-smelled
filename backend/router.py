from typing import Annotated

from fastapi import APIRouter, Depends
from repository import ContentRepository
from schemas import SHomeContent, SHomeContentAdd

router = APIRouter(
    prefix="/home",
    tags=["mainpage content"]
)

@router.post("")
async def add_content(
        content: Annotated[SHomeContentAdd, Depends()]
):
    content_id = await ContentRepository.add_one(content)
    return {"ok": True, "content_id":content_id}


@router.get("")
async def get_contents() -> list[SHomeContent]:
    home_content = await ContentRepository.find_all()
    return home_content
