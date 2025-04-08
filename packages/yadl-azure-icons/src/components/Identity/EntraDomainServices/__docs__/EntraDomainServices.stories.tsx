import type { Meta, StoryObj } from "@storybook/react";
import EntraDomainServices from "../EntraDomainServices";

const meta: Meta<typeof EntraDomainServices> = { title: "Azure/Identity/EntraDomainServices", component: EntraDomainServices };

export default meta;
type Story = StoryObj<typeof EntraDomainServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
