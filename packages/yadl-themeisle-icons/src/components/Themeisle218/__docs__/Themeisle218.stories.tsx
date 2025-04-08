import type { Meta, StoryObj } from "@storybook/react";
import Themeisle218 from "../Themeisle218";

const meta: Meta<typeof Themeisle218> = { title: "Themeisle/Themeisle218", component: Themeisle218 };

export default meta;
type Story = StoryObj<typeof Themeisle218>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
