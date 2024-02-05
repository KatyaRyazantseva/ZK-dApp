import { Addresses } from '@/shared/addresses';
import { TransactionReceipt } from '@ethersproject/abstract-provider';
import {  writeContract, waitForTransactionReceipt } from '@wagmi/core';
import { config } from '../../src/config';

export const executeTransaction = async (proof: any, publicSignals: Array<string>): Promise<any> => {
  // export default async function executeTransaction(proof: any, publicSignals: Array<string>){
  const abiPath = require('./abi/SimpleMultiplier.json');
  console.log("Execute transaction");
  // Execute the transaction
  const txHash = await writeContract(config, {
    address: Addresses.SIMPLE_MULTIPLIER_ADDR,
    abi: abiPath.abi,
    functionName: 'submitProof',
    args: [proof, publicSignals]
  });
  console.log(`txHash: ${txHash}`);

  // Wait for the transaction block to be mined
  const txResult = await waitForTransactionReceipt(config, {
    hash: txHash});
    console.log(`txResult: ${txResult}`);
  return txHash;
  }