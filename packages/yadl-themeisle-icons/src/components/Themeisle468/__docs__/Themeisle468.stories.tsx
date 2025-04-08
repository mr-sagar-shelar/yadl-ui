import type { Meta, StoryObj } from "@storybook/react";
import Themeisle468 from "../Themeisle468";

const meta: Meta<typeof Themeisle468> = { title: "Themeisle/Themeisle468", component: Themeisle468 };

export default meta;
type Story = StoryObj<typeof Themeisle468>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
