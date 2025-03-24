import type { Meta, StoryObj } from "@storybook/react";
import Themeisle270 from "../Themeisle270";

const meta: Meta<typeof Themeisle270> = { title: "Themeisle/Themeisle270", component: Themeisle270 };

export default meta;
type Story = StoryObj<typeof Themeisle270>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
