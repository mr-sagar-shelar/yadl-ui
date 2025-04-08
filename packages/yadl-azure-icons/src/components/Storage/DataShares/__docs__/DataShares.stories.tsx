import type { Meta, StoryObj } from "@storybook/react";
import DataShares from "../DataShares";

const meta: Meta<typeof DataShares> = { title: "Azure/Storage/DataShares", component: DataShares };

export default meta;
type Story = StoryObj<typeof DataShares>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
