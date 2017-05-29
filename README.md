# Reactive architecture for Angular applications

## Installation

npm install --save-dev ragnar

## Description

Bunch of classes and interfaces for building Reactive Angular applications. Inspired by FLUX.

Let's consider main idea of Ragnar architecture - Unidirectional Dataflow.

![Alt text](/readme/simple_arch.png?raw=true)

1. Store is only one. Access to Store is provided through StoreAccessor.

2. StoreAccessor, Services and Actions are singletons.

#### More complex example
![Alt text](/readme/complicated_arch.png?raw=true)

## Sample

<code>
git clone https://github.com/BohdanDonchenko/ragnar.git ragnar-sample

cd ragnar-sample

npm install 

npm start
</code>


