from sqlalchemy import select

from database import new_session, ContentOrm
from schemas import SHomeContentAdd, SHomeContent


class ContentRepository:
    @classmethod
    async def add_one(cls, data: SHomeContentAdd) -> int:
        async with new_session() as session:
            content_dict = data.model_dump()
            content = ContentOrm(**content_dict)
            session.add(content)
            await session.flush()
            await session.commit()
            return content.id
        
    @classmethod
    async def find_all(cls) -> list[SHomeContent]:
        async with new_session() as session:
            query = select(ContentOrm)
            result = await session.execute(query)
            content_models = result.scalars().all()
            content_schemas = [SHomeContent.model_validate(content_model) for content_model in content_models]
            return content_schemas
        