import type { Meta, StoryObj } from "@storybook/react";
import SpotVM from "../SpotVM";

const meta: Meta<typeof SpotVM> = { title: "Azure/Networking/SpotVM", component: SpotVM };

export default meta;
type Story = StoryObj<typeof SpotVM>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
