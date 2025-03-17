from sqlalchemy import Boolean, Integer, String, ForeignKey
from sqlalchemy.orm import declarative_base, Mapped, mapped_column

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    username: Mapped[str] = mapped_column(String, unique=True, index=True)
    email: Mapped[str] = mapped_column(String, unique=True, index=True)
    hashed_master_password: Mapped[str] = mapped_column(String, nullable=False)
    first_name: Mapped[str] = mapped_column(String)
    last_name: Mapped[str] = mapped_column(String)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    
class StoredPasswords(Base):
    __tablename__ = "stored_passwords"
    
    id = Mapped(Integer, primary_key=True, index=True)
    user_id = Mapped(ForeignKey("users.id"), index=True)
    website = Mapped(String)
    password = Mapped(String)