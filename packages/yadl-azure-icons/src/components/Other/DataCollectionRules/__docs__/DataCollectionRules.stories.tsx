import type { Meta, StoryObj } from "@storybook/react";
import DataCollectionRules from "../DataCollectionRules";

const meta: Meta<typeof DataCollectionRules> = { title: "Azure/Other/DataCollectionRules", component: DataCollectionRules };

export default meta;
type Story = StoryObj<typeof DataCollectionRules>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
