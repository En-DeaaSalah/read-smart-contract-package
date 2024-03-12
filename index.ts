import { ethers } from 'ethers';

// Function to retrieve the last block number of the Ethereum mainnet
export async function getLastBlockNumber(): Promise<number> {
    try {
        const provider = ethers.getDefaultProvider();
        return await provider.getBlockNumber();
    } catch (error) {
        console.error('Error occurred while retrieving the last block number:', error);
        throw error;
    }
}

interface IGetUSDTBalanceProps {
    address: string;
    contractAddress: string;
    contractABI: string[];
}

// Function to fetch the USDT balance of an address
export async function getUSDTBalance({
                                         address,
                                         contractABI,
                                         contractAddress,
                                     }: IGetUSDTBalanceProps): Promise<string> {
    try {
        const provider = ethers.getDefaultProvider();
        const contract: any = new ethers.Contract(contractAddress, contractABI, provider);

        const balance = await contract.balanceOf(address);
        return balance.toString();
    } catch (error) {
        console.error('Error occurred while fetching USDT balance:', error);
        throw error;
    }
}