import Link from 'next/link';
import React from 'react';

import st from "./EditBtn.module.scss"

const EditBtn = () => {
  return (
    <Link href={"/EditPage/EditPage"}>
      <a className={st.editBtn}>Режим редактирования</a>
    </Link>
  );
};

export default EditBtn;