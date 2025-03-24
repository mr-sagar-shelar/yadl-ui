import type { Meta, StoryObj } from "@storybook/react";
import GlobeWarning from "../GlobeWarning";

const meta: Meta<typeof GlobeWarning> = { title: "Azure/General/GlobeWarning", component: GlobeWarning };

export default meta;
type Story = StoryObj<typeof GlobeWarning>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
