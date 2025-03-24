import type { Meta, StoryObj } from "@storybook/react";
import Themeisle470 from "../Themeisle470";

const meta: Meta<typeof Themeisle470> = { title: "Themeisle/Themeisle470", component: Themeisle470 };

export default meta;
type Story = StoryObj<typeof Themeisle470>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
