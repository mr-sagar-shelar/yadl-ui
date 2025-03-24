import type { Meta, StoryObj } from "@storybook/react";
import SQLElasticPools from "../SQLElasticPools";

const meta: Meta<typeof SQLElasticPools> = { title: "Azure/Databases/SQLElasticPools", component: SQLElasticPools };

export default meta;
type Story = StoryObj<typeof SQLElasticPools>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
