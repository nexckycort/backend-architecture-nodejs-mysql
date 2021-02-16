import pool from 'loaders/mysqlPool'

export default class TestModel {
  private static instance: TestModel
  private constructor() {}

  public static getInstance(): TestModel {
    if (TestModel.instance === undefined) {
      TestModel.instance = new TestModel()
    }
    return TestModel.instance
  }

  test = async (test: number): Promise<number> => {
    const result: any = await pool.query('SELECT ? + 1 test', [test])
    return +result[0].test
  }
}
