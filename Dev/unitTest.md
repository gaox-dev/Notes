# 单元测试

测试最佳实践
首字母缩写词FIRST描述了有效单元测试的一组简明标准。这些标准是：
* Fast快速：测试应该快速进行。
* Independent/Isolated独立/隔离：测试不应相互共享状态。
* Repeatable可重复：每次运行测试时，您都应获得相同的结果。外部数据提供者或并发问题可能会导致间歇性故障。
* Self-validating自验证：测试应完全自动化。输出应该是“通过”或“失败”，而不是依赖于程序员对日志文件的解释。
* Timely及时：理想情况下，应该在编写要测试的生产代码之前编写测试（测试驱动开发）。
遵循FIRST原则将使您的测试清晰且有用，而不是成为您应用程序的障碍。

每个单元测试均应断言项目中某个方法或函数的单个路径的预期行为。要涵盖多个路径，请为每种场景编写一个测试。
